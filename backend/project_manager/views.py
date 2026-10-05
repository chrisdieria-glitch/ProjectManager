import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from .models import Users,Project,Task,Journal
# Create your views here.

@csrf_exempt
def create_user(request):
    if request.method == "POST":
        new_user_data = json.loads(request.body)
        Users.objects.create(email=new_user_data['email'],username=new_user_data['username'],password=new_user_data['password'])
        user = Users.objects.get(username=new_user_data['username'])
        return JsonResponse({"respuesta": "Usuario Creado", "id": user.id })
    if request.method == "GET":
        return HttpResponse("Hola")

@csrf_exempt
def create_project(request):
        new_project_data = json.loads(request.body)
        Project.objects.create(
            name=new_project_data['name'],
            username_id=new_project_data['username'],
            goals=new_project_data['goals'],
            description=new_project_data['description']
        )
        return JsonResponse({"respuesta": "Proyecto Creado"})