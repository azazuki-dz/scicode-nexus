@echo off
title SciCode Nexus
echo Starting SciCode Nexus Local Server...
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
