from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class RegisterView(APIView):
    permission_classes = []

    def post(self, request):
        username = request.data.get("username")
        password= request.data.get("password")

        if not username or not password:
            return Response({"message":  "Invalid fields"}, status=422)
        
        User.objects.create_user(username=username, password=password)
        return Response({"message": "User created"}, status=201)