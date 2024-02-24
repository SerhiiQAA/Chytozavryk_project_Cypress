describe('Get Songs By Education Genre', () => {
    it('Метод GET повинен повертати відповідь з обов\'язковими полями', () => {
      const songId = 1; // Ваш ID для пошуку
  
      cy.request({
        method: 'GET',
        url: `https://1000and1songs.com/api/v1/education/genre/${songId}/songs`,
        // Додайте інші параметри запиту, якщо потрібно
      }).then((response) => {
        expect(response).to.have.property('status', 200);
        expect(response.body).to.not.be.null;

        const expectedKeys = [
            'items',
            "total",
            "page",        
            "size",
            "pages"
          ];    
          // Перевірка наявності кожного ключа
          expectedKeys.forEach((key) => {
            expect(response.body).to.have.property(key);
        });
    });
});
});