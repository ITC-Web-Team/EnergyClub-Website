# Generated by Django 5.1.7 on 2025-03-09 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=400)),
                ('description', models.TextField()),
                ('img', models.ImageField(upload_to='')),
                ('pdf', models.FileField(upload_to='')),
                ('created_at', models.TimeField(auto_now_add=True)),
            ],
        ),
    ]
