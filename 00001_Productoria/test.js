describe("", () => {
  it("productoria([1, 2, 7]) es 14", () => {
    assert.equal(productoria([1, 2, 7]), 14);
  })
  
  it("productoria([10, 10]) es 100", () => {
    assert.equal(productoria([10, 10]), 100);
  })
  
  it("productoria([10]) es 10", () => {
    assert.equal(productoria([10]), 10);
  })
  
  it("productoria([]) es 1", () => {
    assert.equal(productoria([]), 1);
  })
  
  it("productoria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) es 10", () => {
    assert.equal(productoria([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3628800);
  })
})