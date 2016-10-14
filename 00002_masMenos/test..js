describe("", () => {
  it("masMenos([1]) es [1, 0, 0]", () => {
    assert.deepEqual(masMenos([1]), [1, 0, 0]);
  })
  
  it("masMenos([0, 0, 0, 0]) es [0, 1, 0]", () => {
    assert.deepEqual(masMenos([0, 0, 0, 0]), [0, 1, 0]);
  })
  
  it("masMenos([0, 0, 0, 0, -2, -3, -4, -5]) es [0, 0.5, 0.5]", () => {
    assert.deepEqual(masMenos([0, 0, 0, 0, -2, -3, -4, -5]), [0, 0.5, 0.5]);
  })
  
  it("masMenos([1, 2, 4]) es [1, 0, 0]", () => {
    assert.deepEqual(masMenos([1, 2, 4]), [1, 0, 0]);
  })
  
  it("masMenos([1, 0]) es [0.5, 0.5, 0]", () => {
    assert.deepEqual(masMenos([1, 0]), [0.5, 0.5, 0]);
  })
  
  it("masMenos([1, 2, 0, -1]) es [0.5, 0.25, 0.25]", () => {
    assert.deepEqual(masMenos([1, 2, 0, -1]), [0.5, 0.25, 0.25]);
  })
})
