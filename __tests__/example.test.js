function soma(a, b) {
  return a + b
}
test('quando eu chamo soma com 1 e 2, deve retornar 3', () => {
  const result = soma(1, 2)

  expect(result).toBe(3)
})
