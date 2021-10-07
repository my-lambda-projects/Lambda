from flask import Flask, render_template, redirect, url_for
from .config import Configuration
from .shipping_form import ShippingForm
from flask_wtf.csrf import CSRFProtect
from flask_migrate import Migrate
from .models import db, Package

app = Flask(__name__)
app.config.from_object(Configuration)
csrf = CSRFProtect()
csrf.init_app(app)
db.init_app(app)
migrate = Migrate(app, db)


@app.route("/")
def root_endpoint():
    packages = Package.query.all()
    return render_template("package_status.html", packages=packages)


@app.route("/new_package", methods=["GET", "POST"])
def new_package():
    form = ShippingForm()
    if form.validate_on_submit():
        data = form.data
        new_package = Package(
            sender=data["sender"],
            recipient=data["recipient"],
            origin=data["origin"],
            destination=data["destination"],
            location=data["origin"],
        )
        db.session.add(new_package)
        Package.advance_all_locations()
        return redirect(
            url_for(".root_endpoint")
        )  # .index refers to index function above,
        #  this is how url_for routes
    return render_template("shipping_request.html", form=form)
