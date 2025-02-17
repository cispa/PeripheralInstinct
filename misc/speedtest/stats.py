import matplotlib.pyplot as plt
import numpy as np
import csv
import os
from scipy.stats import sem

for filename in os.listdir(os.path.join(os.getcwd(), 'results/')):
    with open(os.path.join(os.path.join(os.getcwd(), 'results/'), filename), 'r') as f:
        indeces = []
        measurements = []
        ind_mes = []
        reader = csv.reader(f)
        next(reader)  # skip header
        for [index, measurement] in reader:
            index = int(index)
            measurement = float(measurement)
            indeces.append(index)
            measurements.append(measurement)
            ind_mes.append((index, measurement))

        print("")
        print(filename)
        print(f'Avg: {np.mean(measurements):.2f} StdErr: {sem(measurements):.2f}')
        # plt.hist(measurements, bins=range(0,17))
        # plt.show()
