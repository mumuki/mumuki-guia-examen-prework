describe("", () => {
  it("seAbre([10, -5, 3, 0], 4)", () => {
    assert.equal(!seAbre([10, -5, 3, 0], 4), true)
  })
  
  it("seAbre([10, -5, 3, 0], 3)", () => {
    assert.equal(!seAbre([10, -5, 3, 0], 3), true)
  })
  
  it("seAbre([10, -5, 3, 0], 2)", () => {
    assert.equal(seAbre([10, -5, 3, 0], 2), true)
  })
  
  it("seAbre([10, -5, 3, 0], 1)", () => {
    assert.equal(seAbre([10, -5, 3, 0], 1), true)
  })
  
    
  it("seAbre([0, 0, 3, 0], 3)", () => {
    assert.equal(seAbre([0, 0, 3, 0], 3), true)
  })
  
  
  it("aperturas([[0, 0, 3, 0], [1, 2, 4, 5], [0, 0, -1]], 3)", () => {
    assert.equal(aperturas([[0, 0, 3, 0], [1, 2, 4, 5], [0, 0, -1]], 3), [true, false, false])
  })
  
})