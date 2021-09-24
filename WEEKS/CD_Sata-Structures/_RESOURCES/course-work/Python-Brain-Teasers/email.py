from email.message import EmailMessage

msg = EmailMessage()
msg["From"] = "prince@palace.ng"
msg["To"] = "Scrooge McDuck <scoorge@disney.com>"
msg.set_content(
    """\
Dear Sir.

I'm a Nigerian prince who came into some misfortune.
...
"""
)
print(msg)
