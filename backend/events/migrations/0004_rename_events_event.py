# Generated by Django 5.1.7 on 2025-03-09 18:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_alter_events_img'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Events',
            new_name='Event',
        ),
    ]
