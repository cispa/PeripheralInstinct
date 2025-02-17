import pygame
import time
import csv

pygame.init()

running = True
MAX_MEASUREMENTS = 1000
num_measurements = 0
measurements = []
screen = pygame.display.set_mode((640, 240))

time_a = time.time_ns()
while running:
    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_b:
                time_a = time.time_ns()
            if event.key == pygame.K_a:
                time_b = time.time_ns()
                # print((time_b - time_a) / 1000000)
                measurements.append((time_b - time_a) / 1000000)
                num_measurements += 1
                print(num_measurements)
                if num_measurements == MAX_MEASUREMENTS:
                    running = False
                time_a = time.time_ns()

with open('results.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Measurement', 'Time'])
    for index, measurement in enumerate(measurements):
        writer.writerow([index, measurement])

pygame.quit()