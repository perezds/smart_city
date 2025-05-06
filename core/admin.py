from django.contrib import admin
from .models import Ambiente, Sensor, Historico

admin.site.register(Ambiente)
admin.site.register(Sensor)
admin.site.register(Historico)
