import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  faqData = [
    {
      title: 'Ubani on Laws of Inheritance in Eastern Nigeria',
      expanded: true,
      questions: [
        {
question: "What are the primary sources of inheritance law in Eastern Nigeria?",
answer: "The primary sources of inheritance law in Eastern Nigeria include customary laws of various ethnic groups (predominantly Igbo customary law), the Marriage Act, the Administration of Estates Law, and the Wills Law. These are subject to the 1999 Constitution of Nigeria and relevant case law.",
expanded: false
},
{
question: "What is the significance of the case Mojekwu v. Mojekwu (1997) in Eastern Nigerian inheritance law?",
answer: "Mojekwu v. Mojekwu (1997) is a landmark case that challenged the Nnewi custom of 'Oli-ekpe', which prevented females from inheriting their father's property. The Court of Appeal held that this custom was repugnant to natural justice, equity, and good conscience, and declared it unconstitutional for being discriminatory against women.",
expanded: false
},
{
question: "How did the case Ukeje v. Ukeje (2014) impact inheritance rights in Eastern Nigeria?",
answer: "Ukeje v. Ukeje (2014) is a pivotal Supreme Court case that declared unconstitutional the customary law practice of excluding female children from inheriting their father's estate. The court held that this practice conflicts with Section 42(1)(a) and (2) of the 1999 Constitution, which prohibits discrimination on the grounds of gender.",
expanded: false
},
{
question: "What is the 'Nrachi' custom in Igbo inheritance law and how has it been legally challenged?",
answer: "The 'Nrachi' custom allowed a man without male children to keep one of his daughters unmarried to produce male heirs, who would then inherit his property. This custom was challenged in the case of Mojekwu v. Ejikeme (2000), where the Court of Appeal held it to be discriminatory and therefore unconstitutional.",
expanded: false
},
{
question: "How does the case Anekwe v. Nweke (2014) relate to widow's rights in Eastern Nigeria?",
answer: "In Anekwe v. Nweke (2014), the Supreme Court condemned the custom of evicting childless widows from their matrimonial homes. The court held that such customs are repugnant to natural justice, equity, and good conscience, thereby strengthening the inheritance rights of widows in Eastern Nigeria.",
expanded: false
},
{
question: "What is the concept of 'Okpara' in Igbo inheritance law and how has it been interpreted by courts?",
answer: "The 'Okpara' system in Igbo customary law gives the eldest male child (Okpara) the right to inherit and manage the deceased father's estate. This concept was discussed in Ugboma v. Ibeneme (1967), where the court recognized the Okpara's role but also emphasized that he holds the property in trust for other beneficiaries.",
expanded: false
},
{
question: "How did the case Uke v. Iro (2001) impact the application of customary law in inheritance matters?",
answer: "In Uke v. Iro (2001), the Supreme Court held that where there is a conflict between customary law and statutory law in matters of inheritance, statutory law prevails. This decision reinforced the supremacy of statutory provisions over customary practices that may be discriminatory or unconstitutional.",
expanded: false
},
{
question: "What is the significance of Nzekwu v. Nzekwu (1989) in relation to widow's rights in Eastern Nigeria?",
answer: "Nzekwu v. Nzekwu (1989) is significant as the Supreme Court recognized a widow's right to occupy her late husband's property for life, even if she had no children. The court held that the deceased's family cannot dispose of such property without the widow's consent, thereby strengthening widows' inheritance rights.",
expanded: false
},
{
question: "How does the case Nezianya v. Okagbue (1963) relate to a widow's rights over her late husband's property?",
answer: "In Nezianya v. Okagbue (1963), the Supreme Court held that under Onitsha customary law, a widow has the right to use her late husband's property but cannot alienate it without the consent of his family. This case set a precedent for recognizing limited rights of widows in inheritance matters.",
expanded: false
},
{
question: "What impact did the case Onwuchekwa v. Onwuchekwa (1991) have on the inheritance rights of adopted children in Eastern Nigeria?",
answer: "Onwuchekwa v. Onwuchekwa (1991) established that adopted children have inheritance rights under statutory law, even if not recognized under customary law. The court held that an adopted child is entitled to inherit from their adoptive parents, thereby extending inheritance rights to non-biological children.",
expanded: false
},
{
question: "How did the case Ejiamike v. Ejiamike (1972) address the issue of polygamous marriages in relation to inheritance?",
answer: "In Ejiamike v. Ejiamike (1972), the court dealt with inheritance in a polygamous family under Igbo customary law. It was held that in such cases, the estate is typically divided among the different 'houses' (each wife and her children), with the eldest son of the first wife having certain privileges.",
expanded: false
},
{
question: "What is the significance of Ogunkoya v. Ogunkoya (1965) in Eastern Nigerian inheritance law?",
answer: "Although not specific to Eastern Nigeria, Ogunkoya v. Ogunkoya (1965) is significant as it established that customary law marriages are recognized for inheritance purposes. This principle has been applied in Eastern Nigerian cases, ensuring that children from customary marriages have inheritance rights.",
expanded: false
},
{
question: "How does the case Obusez v. Obusez (2007) relate to the distribution of estates in Eastern Nigeria?",
answer: "In Obusez v. Obusez (2007), the Supreme Court held that where a person contracts a statutory marriage, the distribution of his estate upon intestacy is governed by the Administration of Estate Law, not customary law. This case clarified the application of statutory law in inheritance matters involving statutory marriages.",
expanded: false
},
{
question: "What impact did the case Olowu v. Olowu (1985) have on the inheritance rights of children born out of wedlock in Eastern Nigeria?",
answer: "Olowu v. Olowu (1985), though not specific to Eastern Nigeria, established that children born out of wedlock have the right to inherit from their father if paternity is established. This principle has been applied in Eastern Nigerian cases, extending inheritance rights to all children regardless of their parents' marital status.",
expanded: false
},
{
question: "How did the case Megwalu v. Megwalu (1994) address the issue of testamentary freedom in Eastern Nigeria?",
answer: "In Megwalu v. Megwalu (1994), the court upheld the principle of testamentary freedom, ruling that a testator has the right to dispose of his property as he wishes through a valid will, even if this contradicts customary inheritance practices. This case strengthened the position of statutory wills in Eastern Nigeria.",
expanded: false
},
{
question: "What is the significance of Okonkwo v. Okagbue (1994) in relation to customary succession in Eastern Nigeria?",
answer: "Okonkwo v. Okagbue (1994) dealt with the customary practice of 'woman-to-woman' marriage in Igboland. The Supreme Court held that children born out of such arrangements have inheritance rights, recognizing the validity of this customary practice for succession purposes.",
expanded: false
},
{
question: "How does the case Nwosu v. Udeaja (1990) relate to the distribution of estates in Eastern Nigeria?",
answer: "In Nwosu v. Udeaja (1990), the Supreme Court held that under Igbo customary law, the head of the family (usually the eldest son) holds the deceased's property in trust for the benefit of all children. This case clarified the fiduciary duty of the family head in managing inherited property.",
expanded: false
},
{
question: "What impact did the case Onyibor Anekwe & Anor v. Mrs. Maria Nweke (2014) have on discriminatory inheritance practices in Eastern Nigeria?",
answer: "In Onyibor Anekwe & Anor v. Mrs. Maria Nweke (2014), the Supreme Court strongly condemned customs that discriminate against women in inheritance matters. The court described such practices as 'barbaric and repugnant to natural justice, equity and good conscience', further strengthening the legal position against gender discrimination in inheritance.",
expanded: false
},
{
question: "How did the case Awosika v. Awosika (2015) contribute to the understanding of testamentary capacity in Eastern Nigerian inheritance law?",
answer: "While not specific to Eastern Nigeria, Awosika v. Awosika (2015) is significant as it reaffirmed the criteria for testamentary capacity. The court held that a testator must understand the nature of the act of making a will and its effects, know the extent of their property, and be aware of the claims of potential beneficiaries. This principle is applied in assessing the validity of wills in Eastern Nigeria.",
expanded: false
},
{
question: "What is the significance of the case Uke v. Iro (2001) in relation to the supremacy of statutory law over customary law in inheritance matters?",
answer: "In Uke v. Iro (2001), the Supreme Court established that where there is a conflict between customary law and statutory law in matters of inheritance, statutory law prevails. This decision is significant in Eastern Nigeria as it reinforces the application of statutory provisions over customary practices that may be discriminatory or unconstitutional.",
expanded: false
}
        
      ]
    }  ];

  filteredFaqData = [...this.faqData];
  searchTerm: string = '';

  constructor() {}

  toggleCategory(category: any) {
    category.expanded = !category.expanded;
  }

  toggleQuestion(question: any) {
    question.expanded = !question.expanded;
  }

  filterQuestions() {
    const lowercaseSearchTerm = this.searchTerm.toLowerCase().trim();
    if (lowercaseSearchTerm === '') {
      this.filteredFaqData = [...this.faqData];
    } else {
      this.filteredFaqData = this.faqData
        .map(category => ({
          ...category,
          questions: category.questions.filter(q =>
            q.question.toLowerCase().includes(lowercaseSearchTerm)
          ),
        }))
        .filter(category =>
          category.title.toLowerCase().includes(lowercaseSearchTerm) || category.questions.length > 0
        );
    }
  }}