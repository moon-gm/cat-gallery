@ECHO OFF 

@REM 遅延環境変数設定(https://blog.natade.net/2018/10/06/windows-bat-%E9%81%85%E5%BB%B6%E7%92%B0%E5%A2%83%E5%A4%89%E6%95%B0-for-if/)
setlocal EnableDelayedExpansion

SET /P YEAR="Please input year number :"
SET /P MONTH="Please input month number :"
SET IDX=0

CD C:\Users\yoake\Desktop\Github\React\cat-gallery\public\forMove

SET PATH=C:\Users\yoake\Desktop\Github\React\cat-gallery\public\%YEAR%\%MONTH%\
MD %PATH%

FOR %%F IN (*.jpg) DO (
    SET /A IDX+=1
    IF %MONTH% lss 10 (
        IF !IDX! lss 10 (
            ECHO %%Fから%YEAR%-0%MONTH%_0!IDX!.jpg
            REN "%%F" %YEAR%-0%MONTH%_0!IDX!.jpg
            MOVE %YEAR%-0%MONTH%_0!IDX!.jpg %PATH%
        ) ELSE (
            ECHO %%Fから%YEAR%-0%MONTH%_!IDX!.jpg
            REN "%%F" %YEAR%-0%MONTH%_!IDX!.jpg
            MOVE %YEAR%-0%MONTH%_!IDX!.jpg %PATH%   
        )
    ) ELSE (
        IF !IDX! lss 10 (
            ECHO %%Fから%YEAR%-%MONTH%_0!IDX!.jpg
            REN "%%F" %YEAR%-%MONTH%_0!IDX!.jpg
            MOVE %YEAR%-%MONTH%_0!IDX!.jpg %PATH%
        ) ELSE (
            ECHO %%Fから%YEAR%-%MONTH%_!IDX!.jpg
            REN "%%F" %YEAR%-%MONTH%_!IDX!.jpg
            MOVE %YEAR%-%MONTH%_!IDX!.jpg %PATH%
        )
    )
)

CD C:\Users\yoake\Desktop\Github\React\cat-gallery