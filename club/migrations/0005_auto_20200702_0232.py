# Generated by Django 3.0.7 on 2020-07-02 02:32

from django.db import migrations, models
import django_better_admin_arrayfield.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('club', '0004_auto_20200702_0230'),
    ]

    operations = [
        migrations.AlterField(
            model_name='series',
            name='series_genres',
            field=django_better_admin_arrayfield.models.fields.ArrayField(base_field=models.CharField(max_length=30), blank=True, null=True, size=None),
        ),
    ]