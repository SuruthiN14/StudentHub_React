const downloadReport = () => {
  const report = `
STUDENTHUB - PROGRESS REPORT

Student: Suruthi
Student ID: ST101
Department: Computer Science

Java Full Stack: ${progress.java}%
React JS: ${progress.react}%
SQL: ${progress.sql}%

Average Progress: ${averageProgress}%
`;

  const blob = new Blob([report], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "Suruthi-Progress-Report.txt";
  link.click();

  URL.revokeObjectURL(url);
};
