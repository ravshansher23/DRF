from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.response import Response
from .models import TODO, Project
from rest_framework import status
from .serializers import ProjectSerializer, TODOSerializer
from rest_framework.pagination import PageNumberPagination
from .filters import TODOFilters, ProjectFilters


class TODOLimitOffsetPagination(PageNumberPagination):
    page_size = 20
class TODOCustomViewSet(ModelViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOSerializer
    pagination_class = TODOLimitOffsetPagination
    filterset_class = TODOFilters

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            instance.is_active = False
            instance.save()
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)

class ProjectLimitOffsetPagination(PageNumberPagination):
    page_size = 10
class ProjectCustomViewSet(ModelViewSet):
    queryset = Project.objects.all()
       
    pagination_class = ProjectLimitOffsetPagination
    serializer_class = ProjectSerializer
    filterset_class = ProjectFilters