from rest_framework import viewsets
from rest_framework import filters
from .models import Ambiente, Sensor, Historico
from .serializers import AmbienteSerializer, SensorSerializer, HistoricoSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .filters import AmbienteFilter, SensorFilter

class AmbienteViewSet(viewsets.ModelViewSet):
    queryset = Ambiente.objects.all()
    serializer_class = AmbienteSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = AmbienteFilter

class SensorViewSet(viewsets.ModelViewSet):
    queryset = Sensor.objects.all()
    serializer_class = SensorSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = SensorFilter
class HistoricoViewSet(viewsets.ModelViewSet):
    queryset = Historico.objects.all()
    serializer_class = HistoricoSerializer

class MinhaViewProtegida(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"mensagem": "Você está autenticado, sucesso!"})