# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Flask and Flask-Cors directly
RUN pip install --no-cache-dir Flask Flask-Cors

# Expose the port that Flask runs on
EXPOSE 8080

# Define environment variables
ENV FLASK_APP=FlaskAOW.py
ENV FLASK_RUN_HOST=0.0.0.0
ENV FLASK_ENV=production
ENV FLASK_RUN_PORT=8080  

# Run Flask when the container launches
CMD ["flask", "run"]