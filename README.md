# MongoDB Aggregation Pipeline Bug: Unexpected Sorting in $match Stage

This repository demonstrates a subtle bug in a MongoDB aggregation pipeline that can lead to incorrect results. The issue stems from relying on the implicit document order after applying a $match stage without explicitly sorting. 

## Bug Description

The `bug.js` file contains an aggregation pipeline designed to retrieve the top 10 most frequent values from a specified field. However, if the documents in the collection have a natural order or are filtered in a way that influences the document order, the $limit stage may produce incorrect results. Specifically, the $match stage may unintentionally modify the order of documents, leading to an inaccurate top 10 list.

## Solution

The `bugSolution.js` file provides a corrected version of the pipeline. To fix the issue, it explicitly sorts the documents *before* applying the $limit stage. This ensures that the top 10 results are based on the correct sorting order rather than an implicit order subject to changes.
