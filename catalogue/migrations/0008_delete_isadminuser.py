# Generated by Django 3.0.4 on 2020-03-23 16:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
        ('catalogue', '0007_isadminuser'),
    ]

    operations = [
        migrations.DeleteModel(
            name='IsAdminUser',
        ),
    ]