# Generated by Django 5.1.7 on 2025-03-09 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('position', models.CharField(max_length=200)),
                ('rank', models.IntegerField()),
                ('profile_pic', models.ImageField(upload_to='')),
                ('tenure_year', models.IntegerField()),
                ('linkedin_url', models.URLField()),
                ('instagram_url', models.URLField()),
            ],
        ),
    ]
