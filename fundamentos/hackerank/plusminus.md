# Plus Minus

Given an array of integers, calculate the ratios of its elements that are **positive**, **negative**, and **zero**. Print the decimal value of each fraction on a new line with 6 places after the decimal.

**Note:** This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with an absolute error of up to \(10^{-4}\) are acceptable.

## Example

\[arr = [1, 1, 0, -1, -1]\]

There are \(n = 5\) elements: two positive, two negative, and one zero. Their ratios are \(\frac{2}{5} = 0.400000\), \(\frac{2}{5} = 0.400000\), and \(\frac{1}{5} = 0.200000\). Results are printed as:

---

### Function Description

Complete the **plusMinus** function with the following parameter(s):

- **int arr[n]**: an array of integers

## Print

Print the ratios of positive, negative, and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value.

## Input Format

The first line contains an integer, \(n\), the size of the array.  
The second line contains \(n\) space-separated integers that describe \(arr[n]\).

## Constraints

\[0 < n \leq 100 \\
-100 \leq arr[i] \leq 100\]

## Sample Input

| STDIN | Function |
|---|---|
| 6    | arr[] size n = 6 |
| -4 3 -9 0 4 1 | arr = [-4, 3, -9, 0, 4, 1] |

## Sample Output

0.500000  
0.333333  
0.166667  

---

**Explanation**

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.

The proportions of occurrence are positive: \(\frac{3}{6} = 0.500000\), negative: \(\frac{2}{6} = 0.333333\), and zeros: \(\frac{1}{6} = 0.166667\).