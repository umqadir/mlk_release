function initDataTable(url, selector, columns) {
  fetch(url)
    .then(r => r.json())
    .then(rows => {
      new DataTable(selector, {
        data: rows,
        columns: columns,
        pageLength: 25,
        deferRender: true
      });
    });
}