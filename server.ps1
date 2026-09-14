# SciCode Nexus - Lightweight Local HTTP Server (Zero-Dependency)
$port = 3000
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "======================================================" -ForegroundColor Cyan
    Write-Host "  SciCode Nexus Server Running at http://localhost:$port/" -ForegroundColor Green
    Write-Host "  Opening your default web browser..." -ForegroundColor Yellow
    Write-Host "  Press Ctrl+C in this window to stop the server." -ForegroundColor Gray
    Write-Host "======================================================" -ForegroundColor Cyan
    
    Start-Process "http://localhost:$port/"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($localPath)) { $localPath = 'index.html' }
        $filePath = Join-Path $PSScriptRoot $localPath
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = switch ($ext) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.json' { 'application/json; charset=utf-8' }
                '.png'  { 'image/png' }
                '.svg'  { 'image/svg+xml' }
                default { 'application/octet-stream' }
            }
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} catch {
    Write-Host "Server Error: $_" -ForegroundColor Red
} finally {
    if ($listener.IsListening) { $listener.Stop() }
}
