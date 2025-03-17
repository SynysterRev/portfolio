from models import Project, db

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///portfolio.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)
CORS(app)


@app.route("/api/projects", methods=["GET"])
def get_projects():
    projects = Project.query.all()
    result = []
    for project in projects:
        result.append(
            {
                "id": project.id,
                "title": project.title,
                "description": project.description,
                "image_url": project.image_url,
                "github_link": project.github_link,
                "live_url": project.live_url,
            }
        )
    return jsonify(result)


def init_db():
    with app.app_context():
        db.create_all()

        if Project.query.count == 0:
            project1 = Project(
                title="Portfolio Personnel",
                description="Portfolio développé avec Flask et React",
                github_url="https://github.com/username/portfolio",
                technologies="Flask, React, SQLite",
            )
            db.session.add(project1)
            db.session.commit()


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
