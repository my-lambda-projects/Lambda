#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from datetime import datetime, timedelta, timezone

# datetime:
now = datetime.now()
print("now =", now)
print("type(now) =", type(now))

# datetime:
dt = datetime(2015, 4, 19, 12, 20)
print("dt =", dt)

# datetimetimestamp:
print("datetime -> timestamp:", dt.timestamp())

# timestampdatetime:
t = dt.timestamp()
print("timestamp -> datetime:", datetime.fromtimestamp(t))
print("timestamp -> datetime as UTC+0:", datetime.utcfromtimestamp(t))

# strdatetime:
cday = datetime.strptime("2015-6-1 18:19:59", "%Y-%m-%d %H:%M:%S")
print("strptime:", cday)

# datetime:
print("strftime:", cday.strftime("%a, %b %d %H:%M"))

# :
print("current datetime =", cday)
print("current + 10 hours =", cday + timedelta(hours=10))
print("current - 1 day =", cday - timedelta(days=1))
print("current + 2.5 days =", cday + timedelta(days=2, hours=12))

# UTC+0UTC+8:
utc_dt = datetime.utcnow().replace(tzinfo=timezone.utc)
utc8_dt = utc_dt.astimezone(timezone(timedelta(hours=8)))
print("UTC+0:00 now =", utc_dt)
print("UTC+8:00 now =", utc8_dt)
