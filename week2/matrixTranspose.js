function transpose(matrix) {
    let mass = [];
  
    for (let j = 0; j < matrix[0].length; j++)
      mass[j] = [];
    for (let j = 0; j < mass.length; j++)
      for (let i = 0; i < matrix.length; i++)
          mass[j][i] = matrix[i][j];
    return (mass);
  }