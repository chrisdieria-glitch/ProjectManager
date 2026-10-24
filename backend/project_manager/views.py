import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from .models import Users,Project,Task,Journal
# Create your views here.

@csrf_exempt
def create_user(request):
     new_user_data = json.loads(request.body)
     if Users.objects.filter(email=new_user_data['email']).exists() and Users.objects.filter(username=new_user_data['username']).exists():
          return JsonResponse({"respuesta": "Email is already register"})
     elif Users.objects.filter(username=new_user_data["username"]).exists():
          return JsonResponse({"respuesta": "Username is taken"})
     else:
          Users.objects.create(email=new_user_data['email'],username=new_user_data['username'],password=new_user_data['password'])
          user = Users.objects.get(username=new_user_data['username'])
          return JsonResponse({"respuesta": "User created", "id": user.id , "username" : user.username})

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

@csrf_exempt
def get_project(request):
     data = json.loads(request.body)
     userId = data['username']
     projects = Project.objects.filter(username_id=userId)
     tasks = Task.objects.filter(project__in=projects)
     return JsonResponse({
          "proyectos" :list(projects.values()),
          "tasks": list(tasks.values())
     })

@csrf_exempt
def create_task(request):
     new_task_data = json.loads(request.body)

     Task.objects.create(
        title=new_task_data['title'],
        description=new_task_data['description'],
        project_id=new_task_data['project_id']
     )
     return JsonResponse({"respuesta": "Tarea Creado"})

@csrf_exempt
def log_in(request):
    user_data = json.loads(request.body)
    print(f"BODY: {request.body}")
    user = Users.objects.get(username=user_data['username'])
    if user.password == user_data["password"]:
         return JsonResponse({
              "respuesta": "Log in suscessful",
              "id": user.id
         })
    else:
         return JsonResponse({
              "respuesta": "Username or password wrong"
         })