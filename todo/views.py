from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet

from .models import TODO, Project
from .serializers import ProjectSerializer, TODOSerializer

class TODOModelViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOSerializer

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer   