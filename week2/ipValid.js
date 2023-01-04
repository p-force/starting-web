function isValidIP(str) {
    let newS = str.split('.');
    for (let i = 0; i < newS.length; i++) {
      if (newS[i].length === 0 || str.length === 0 || newS.length !== 4)
        return(false);
      for (let j = 0; j < newS[i].length; j++)
        if (newS[i][0] === '0' && newS[i].length > 1 || newS[i][j] < '0' || newS[i][j] > '9' || Number(newS[i]) > 255)
            return (false);
    }
    return true;
  }