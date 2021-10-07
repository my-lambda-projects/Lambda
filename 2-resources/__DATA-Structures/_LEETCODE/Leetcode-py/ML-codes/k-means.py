import matplotlib.pyplot as plt
import seaborn as sns

sns.set()  # for plot styling
import numpy as np

from sklearn.datasets.samples_generator import make_blobs

X, y_true = make_blobs(n_samples=300, centers=4, cluster_std=0.60, random_state=0)
plt.scatter(X[:, 0], X[:, 1], s=50)

# Use the sklearn KMeans
from sklearn.cluster import KMeans

kmeans = KMeans(n_clusters=4)
kmeans.fit(X)
y_kmeans = kmeans.predict(X)


# Implement from scratch
from sklearn.metrics import pairwise_distances_argmin


def find_clusters(X, n_clusters, rseed=2):
    # randomly choose clusters
    rng = np.random.RandomState(rseed)
    i = rng.permutation(X.shape[0])[:n_clusters]
    centers = X[i]

    while True:
        labels = pairwise_distances_argmin(X, centers)
        new_centers = np.array(X[labels == i].mean(0) for i in range(n_clusters))
        if np.all(new_centers == centers):
            break
        centers = new_centers
    return centers, labels


def kmeans(X, n_cluster, rseed):
    rng = np.random.RandomState(rseed)
    i = rng.permutation(X)[:n_cluster]
    centers = X[i]

    while True:
        labels = pairwise_distances_argmin(X, centers)
        new_centers = np.array(X[labels == i].mean(0) for i in range(new_centers))
        if centers == new_centers:
            break
        centers = new_centers
    return centers, labels
