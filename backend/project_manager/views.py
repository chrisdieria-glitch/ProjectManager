import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from .models import Users
# Create your views here.

@csrf_exempt
def create_user(request):
    if request.method == "POST":
        new_user_data = json.loads(request.body)
        Users.objects.create(email=new_user_data['email'],username=new_user_data['username'],password=new_user_data['password'])
        return JsonResponse({"respuesta": "Usuario Creado"})
    if request.method == "GET":
        return HttpResponse("Hola")

