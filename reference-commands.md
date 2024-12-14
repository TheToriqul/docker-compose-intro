# Docker Compose Command Reference Guide

## Table of Contents
- [Core Operations](#core-operations)
- [Service Management](#service-management)
- [Monitoring and Debugging](#monitoring-and-debugging)
- [Configuration and Scaling](#configuration-and-scaling)
- [Cleanup Operations](#cleanup-operations)

## Core Operations

### Initial Setup and Deployment
```bash
# Start all services in detached mode
docker-compose up --build -d

# Start specific services
docker-compose up -d web nginx
docker-compose up -d web redis

# Verify service status
docker-compose ps

# View service logs
docker-compose logs
```

### Basic Service Control
```bash
# Stop all services
docker-compose stop

# Start stopped services
docker-compose start

# Restart services
docker-compose restart

# Pause services
docker-compose pause

# Unpause services
docker-compose unpause
```

## Service Management

### Individual Service Operations
```bash
# View logs for specific service
docker-compose logs web

# Follow log output
docker-compose logs -f redis

# Execute command in service container
docker-compose exec web sh

# View service configuration
docker-compose config
```

### Resource Management
```bash
# View resource usage
docker-compose top

# List containers
docker-compose ps -a

# List running containers only
docker-compose ps --services
```

## Monitoring and Debugging

### Health Checks
```bash
# Check service health
docker-compose ps --format "table {{.Service}}\t{{.Status}}"

# View container events
docker-compose events

# Inspect service details
docker-compose inspect web
```

### Troubleshooting
```bash
# Validate compose file
docker-compose config --quiet

# Check network connectivity
docker-compose exec web ping redis

# View service dependencies
docker-compose depends-on web
```

## Configuration and Scaling

### Service Configuration
```bash
# Override default configuration
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Scale services
docker-compose up -d --scale web=3

# Pull latest images
docker-compose pull
```

### Network Operations
```bash
# List networks
docker-compose network ls

# Inspect network
docker-compose network inspect default
```

## Cleanup Operations

### Basic Cleanup
```bash
# Stop and remove containers
docker-compose down

# Remove stopped containers
docker-compose rm

# Remove unused data
docker-compose down --volumes --remove-orphans
```

### Complete Cleanup
```bash
# Remove everything, including images
docker-compose down --rmi all --volumes --remove-orphans

# Prune system
docker system prune -af --volumes
```

## Learning Notes

1. Always verify configurations before deployment
2. Use detached mode (-d) for production deployments
3. Regularly monitor service logs for issues
4. Implement proper cleanup procedures
5. Maintain separate configurations for different environments

---

> 💡 **Best Practice**: Always use version control for your compose files and maintain environment-specific configurations separately.

> ⚠️ **Warning**: Be cautious with cleanup commands as they can remove data permanently.

> 📝 **Note**: This reference guide contains common commands for docker-compose operations. Always refer to official documentation for complete command details.