from django.db import models

class Ambiente(models.Model):
    nome = models.CharField(max_length=100)
    codigo_sig = models.CharField(max_length=20, unique=True)
    localizacao = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.nome} ({self.codigo_sig})"

class Sensor(models.Model):
    TIPO_CHOICES = [
        ('temperatura', 'Temperatura'),
        ('umidade', 'Umidade'),
        ('luminosidade', 'Luminosidade'),
        ('contador', 'Contador de Pessoas'),
    ]
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES)
    descricao = models.TextField(blank=True)
    status = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.tipo}"

class Historico(models.Model):
    sensor = models.ForeignKey(Sensor, on_delete=models.CASCADE, related_name='historicos')
    ambiente = models.ForeignKey(Ambiente, on_delete=models.CASCADE, related_name='historicos')
    valor = models.FloatField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sensor.tipo} em {self.ambiente.nome} às {self.timestamp.strftime('%d/%m/%Y %H:%M:%S')} - {self.valor}"
