#!/usr/bin/env bash
# tools/tab.sh <url-substring> — front the Chrome window and activate the first tab whose URL contains the substring.
osascript - "$1" <<'AS'
on run argv
  set needle to item 1 of argv
  tell application "Google Chrome"
    activate
    repeat with w in windows
      set i to 1
      repeat with t in tabs of w
        if (URL of t) contains needle then
          set active tab index of w to i
          set index of w to 1
          return "activated " & (URL of t)
        end if
        set i to i + 1
      end repeat
    end repeat
  end tell
  return "not found"
end run
AS
