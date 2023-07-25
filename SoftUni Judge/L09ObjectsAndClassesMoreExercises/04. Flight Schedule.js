function solve([flights, statusChanges, status]) {
  const fligthMap = flights.reduce((acc, curr) => {
    const [number, destination] = curr.split(" ");
    acc[number] = {
      destination,
      status: null,
    };
    return acc;
  }, {});

  statusChanges.forEach((change) => {
    const [number, status] = change.split(" ");
    if (fligthMap[number]) {
      fligthMap[number].status = status;
    }
  });

  if (status === "Ready to fly") {
    Object.entries(fligthMap).forEach(([number, data]) => {
      if (data.status === null) {
        status.data = "Ready to fly";
        console.log(data);
      }
    });
  }
}

solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);

solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
