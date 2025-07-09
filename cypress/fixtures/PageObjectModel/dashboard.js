
class DashboardPage {
    getLinks() {
        return cy.get('a');
    }

    getImages() {
        return cy.get('img');
    }

    verifyLinksNotBroken() {
        this.getLinks().each(($link) => {
            const href = $link.attr('href');
            cy.request(href).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }

    verifyImagesNotBroken() {
        this.getImages().each(($img) => {
            const src = $img.attr('src');
            cy.request(src).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
    }
}

export default DashboardPage;
