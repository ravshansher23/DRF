from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from rest_framework import mixins


from .models import CustomUser
from .serializers import CustomUserSerializer

class CustomUserModelViewSet(mixins.CreateModelMixin, mixins.ListModelMixin,
mixins.RetrieveModelMixin, GenericViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

