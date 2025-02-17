import matplotlib.pyplot as plt
import numpy as np
import csv

indeces = []
measurements = []
ind_mes = []
with open('results.csv', 'r', newline='') as f:
    reader = csv.reader(f)
    next(reader) # skip header
    for [index, measurement] in reader:
        index = int(index)
        measurement = float(measurement)
        indeces.append(index)
        measurements.append(measurement)
        ind_mes.append((index, measurement))

plt.hist(measurements, bins=range(0,17))
plt.show() 
