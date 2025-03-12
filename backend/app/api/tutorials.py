from flask import Blueprint, jsonify

bp = Blueprint('tutorials', __name__, url_prefix='/api/tutorials')

@bp.route('/')
def get_tutorials():
    tutorials = [
        {
            'id': 1,
            'title': 'Introduction to Python for AI Development',
            'description': 'Learn the fundamentals of Python programming with a focus on AI applications',
            'videoUrl': '#',
            'date': 'March 2025'
        },
        {
            'id': 2,
            'title': 'Working with LangChain and Vector Databases',
            'description': 'Hands-on tutorial for building LLM applications with LangChain and ChromaDB',
            'videoUrl': '#',
            'date': 'March 2025'
        }
    ]
    
    return jsonify(tutorials)

@bp.route('/<int:tutorial_id>')
def get_tutorial(tutorial_id):
    # In a real app, this would fetch from a database
    tutorials = {
        1: {
            'id': 1,
            'title': 'Introduction to Python for AI Development',
            'description': 'Learn the fundamentals of Python programming with a focus on AI applications',
            'full_content': 'This tutorial covers Python basics with a focus on AI applications...',
            'videoUrl': '#',
            'date': 'March 2025'
        },
        2: {
            'id': 2,
            'title': 'Working with LangChain and Vector Databases',
            'description': 'Hands-on tutorial for building LLM applications with LangChain and ChromaDB',
            'full_content': 'In this tutorial, we explore building LLM applications...',
            'videoUrl': '#',
            'date': 'March 2025'
        }
    }
    
    tutorial = tutorials.get(tutorial_id)
    if not tutorial:
        return jsonify({'error': 'Tutorial not found'}), 404
        
    return jsonify(tutorial)
