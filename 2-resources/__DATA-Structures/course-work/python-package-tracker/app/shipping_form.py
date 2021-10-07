from flask_wtf import FlaskForm
from wtforms.fields import StringField, BooleanField, SubmitField, SelectField
from wtforms.validators import DataRequired
from app.map.map import map


dr = [DataRequired()]

origins = [(origin, origin) for origin in map]
print(origins)


class ShippingForm(FlaskForm):
    sender = StringField("Sender Name", dr)
    recipient = StringField("Recipient Name", dr)
    origin = SelectField("Origin", choices=origins)
    destination = SelectField("Destination", choices=origins)
    express = BooleanField("Express Shipping")
    submit = SubmitField("Send package")
