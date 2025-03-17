from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(150))
    github_url = db.Column(db.String(200))
    live_url = db.Column(db.String(150))
