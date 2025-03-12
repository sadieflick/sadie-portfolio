from flask import Blueprint, jsonify

bp = Blueprint('projects', __name__, url_prefix='/api/projects')

@bp.route('/')
def get_projects():
    projects = [
        {
            'id': 1,
            'title': 'LLM Project',
            'description': 'AI stack project using langchain, chromadb, and Ollama',
            'tags': ['Python', 'AI', 'LLM'],
            'github': 'https://github.com/yourusername/llm-project'
        },
        {
            'id': 2,
            'title': 'Portfolio Website',
            'description': 'This portfolio website built with React and Flask',
            'tags': ['React', 'Flask', 'CSS'],
            'github': 'https://github.com/yourusername/portfolio'
        }
    ]
    
    return jsonify(projects)

@bp.route('/<int:project_id>')
def get_project(project_id):
    # In a real app, this would fetch from a database
    projects = {
        1: {
            'id': 1,
            'title': 'LLM Project',
            'description': 'AI stack project using langchain, chromadb, and Ollama',
            'long_description': 'A detailed exploration of building LLM applications with Python...',
            'tags': ['Python', 'AI', 'LLM'],
            'github': 'https://github.com/yourusername/llm-project',
            'image': 'llm_project.jpg'
        },
        2: {
            'id': 2,
            'title': 'Portfolio Website',
            'description': 'This portfolio website built with React and Flask',
            'long_description': 'My personal portfolio site built with React and Flask...',
            'tags': ['React', 'Flask', 'CSS'],
            'github': 'https://github.com/yourusername/portfolio',
            'image': 'portfolio.jpg'
        }
    }
    
    project = projects.get(project_id)
    if not project:
        return jsonify({'error': 'Project not found'}), 404
        
    return jsonify(project)
