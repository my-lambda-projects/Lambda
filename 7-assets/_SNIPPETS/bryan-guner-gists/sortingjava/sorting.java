
import java.util.ArrayList;

public class sorting {

	public static int[] insertionSort(int[] orig) {
		int j, i, key;
		int[] A = orig.clone();
		for (j = 1; j < A.length; j++) {
			key = A[j];
			i = j - 1;
			while (i >= 0 && A[i] > key) {
				A[i + 1] = A[i];
				i--;
			}
			A[i + 1] = key;
		}

		return A;
	}

	public static int[] mergeSort(int[] A, int p, int q, int r) {
		int [] orig = A.clone();
		int[] L, R;
		L = new int[q - p];
		R = new int[r - q];

		for (int i = p; i < q; i++) {
			L[i - p] = orig[i];
		}
		for (int i = q; i < r; i++) {
			R[i - q] = orig[i];
		}
		if (L.length > 1) {
			L = mergeSort(L, 0, L.length / 2, L.length);
		}
		if (R.length > 1) {
			R = mergeSort(R, 0, R.length / 2, R.length);
		}
		int j, k;
		j = 0;
		k = 0;

		for (int i = p; i < r; i++) {
			if (j >= L.length && k < R.length) {
				orig[i] = R[k];
				k++;

			} else if (k >= R.length && j < L.length) {
				orig[i] = L[j];
				j++;

			} else if (L[j] > R[k]) {
				orig[i] = R[k];
				k++;
			} else if (L[j] <= R[k]) {
				orig[i] = L[j];
				j++;
			}

		}

		return A;
	}

}
