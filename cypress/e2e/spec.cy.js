describe('Testing Menu Categories', () => {
  it('Navigasi ke halaman Categories', () => {
    // Buka halaman login
    cy.visit('http://localhost:5173/login')

    // Login dengan akun admin
    cy.get('input[name="email"]').type('admin@store.com')
    cy.get('input[name="password"]').type('123456')
    cy.get('[data-testid="submit"]').click()

    // Klik menu Categories
    cy.get('[data-testid="categories"]', { timeout: 10000 }).should('be.visible').click()

    // Tunggu 5 detik setelah masuk ke halaman Categories
    cy.wait(5000)

    // Pastikan URL halaman Categories benar
    cy.url().should('include', '/categories')
  })

  it('Menampilkan widget Users, Products, dan Categories', () => {
    // Pastikan widget Users, Products, dan Categories ada di halaman
    cy.get('div.mydatatableTitle').contains('USERS')
    cy.get('div.mydatatableTitle').contains('PRODUCTS')
    cy.get('div.mydatatableTitle').contains('CATEGORIES')
  })

  it('Menampilkan form input data category', () => {
    // Klik tombol Add New
    cy.get('[data-testid="add-new"]').click()

    // Tunggu 3 detik setelah menekan tombol Add New
    cy.wait(3000)

    // Pastikan form input data category ditampilkan
    cy.get('form[data-testid="category-form"]').should('be.visible')
  })

  it('Memastikan elemen input dengan id="name" dan placeholder "Coffee"', () => {
    // Pastikan elemen input dengan id="name" ada dan terlihat
    cy.get('input[id="name"]').should('be.visible')

    // Pastikan elemen input dengan id="name" memiliki atribut placeholder dengan nilai "Coffee"
    cy.get('input[id="name"]').should('have.attr', 'placeholder', 'Coffee')
  })

  it('Memasukkan data category baru', () => {
    // Masukkan data "Appetizer" ke dalam elemen input dengan id="name"
    cy.get('input[id="name"]').type('Appetizer')

    // Pastikan nilai elemen input dengan id="name" menjadi "Appetizer"
    cy.get('input[id="name"]').should('have.value', 'Appetizer')
  })

  it('Menyimpan data category baru', () => {
    // Klik tombol Submit
    cy.get('button[type="submit"]').click()

    // Tunggu 3 detik setelah menekan tombol Submit
    cy.wait(3000)

    // Pastikan URL halaman Categories tetap sama
    cy.url().should('include', '/categories')

    // Pastikan data category baru "Appetizer" muncul di table
    cy.get('table tbody tr').contains('Appetizer')
  })

  it('Menghapus data category', () => {
    // Klik tombol pada baris data "Appetizer"
    cy.get('table tbody tr:contains("Appetizer") button').click()

    // Tunggu 3 detik setelah menekan tombol pada baris data "Appetizer"
    cy.wait(3000)

    // Pastikan data category "Appetizer" sudah tidak ada di table
    cy.get('table tbody tr').should('not.contain', 'Appetizer')
  })
})
