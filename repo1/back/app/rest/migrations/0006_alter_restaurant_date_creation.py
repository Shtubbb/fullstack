# Generated by Django 4.1.7 on 2023-03-01 01:38

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('rest', '0005_alter_restaurant_date_creation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='date_creation',
            field=models.DateTimeField(default=django.utils.timezone.now, null=True),
        ),
    ]
