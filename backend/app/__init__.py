from flask import Flask
from flask_cors import CORS
import os

def create_app(test_config=None):
    # Create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    
    app.config.from_mapping(
        SECRET_KEY=os.environ.get('SECRET_KEY', 'dev'),
    )

    if test_config is None:
        # Load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # Load the test config if passed in
        app.config.from_mapping(test_config)

    # Ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Register blueprints
    from app.api import projects, tutorials
    app.register_blueprint(projects.bp)
    app.register_blueprint(tutorials.bp)

    @app.route('/')
    def hello():
        return {'message': 'Welcome to Sadie Flick Portfolio API!'}

    return app
