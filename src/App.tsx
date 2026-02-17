import { useState, useEffect } from 'react';
import { Sparkles, Home, Building2, PartyPopper, Truck, CheckCircle, Phone, MapPin, MessageCircle, Star } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    date: '',
    service: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Home,
      title: 'Usafi wa Nyumba',
      description: 'Deep cleaning',
      features: ['Kitchen', 'Bathroom', 'Windows', 'Sofa cleaning']
    },
    {
      icon: Building2,
      title: 'Usafi wa Ofisi',
      description: 'Professional spaces',
      features: ['Offices', 'Schools', 'Shops', 'Apartment buildings']
    },
    {
      icon: PartyPopper,
      title: 'After Event Cleaning',
      description: 'Post-celebration cleanup',
      features: ['Harusi', 'Birthday', 'Private events', 'Outdoor cleaning']
    },
    {
      icon: Truck,
      title: 'Move In / Move Out',
      description: 'Relocation cleaning',
      features: ['Kuhamia', 'Kuhama', 'Final cleaning', 'Key handover']
    }
  ];

  const whyChooseUs = [
    { icon: CheckCircle, text: 'Wafanyakazi waaminifu' },
    { icon: CheckCircle, text: 'Bei nafuu' },
    { icon: CheckCircle, text: 'Huduma ya haraka' },
    { icon: CheckCircle, text: 'Tunapatikana Nungwi' },
    { icon: CheckCircle, text: 'Vifaa vya kisasa' },
    { icon: CheckCircle, text: 'Response ndani ya dakika 10' }
  ];

  const testimonials = [
    {
      name: 'Asha',
      location: 'Nungwi',
      text: 'Huduma bora sana! Nyumba yangu ilikuwa safi kama hoteli.',
      rating: 5
    },
    {
      name: 'Mohammed',
      location: 'Kendwa',
      text: 'Wamefanya kazi nzuri sana ofisini. Tunawaomba tena!',
      rating: 5
    },
    {
      name: 'Fatma',
      location: 'Nungwi',
      text: 'Baada ya harusi yangu, wamesafisha kila kitu vizuri. Asante!',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Habari Sammy Smart Cleanup 👋

Jina: ${formData.name}
Simu: ${formData.phone}
Eneo: ${formData.location}
Huduma: ${formData.service}
Tarehe: ${formData.date}
${formData.message ? `Ujumbe: ${formData.message}` : ''}

Naomba huduma tafadhali.`;

    const url = `https://wa.me/255626232462?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/255626232462', '_blank');
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen bg-gradient-to-br from-[#0A1F44] via-[#1E3A8A] to-[#3B82F6] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img src="/WhatsApp_Image_2026-02-02_at_11.11.26_(1).jpeg" alt="Samy Smart Cleanup Logo" className="h-48 sm:h-56 lg:h-64 drop-shadow-2xl animate-bounce" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Professional Cleaning Services in Nungwi
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 font-light">
              Tunakakikisha usafi, faraja na amani nyumbani kwako.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold">100+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold">Available 7 Days</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-semibold">Trusted in Nungwi</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="group bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 animate-pulse hover:animate-none"
              >
                <MessageCircle className="w-6 h-6" />
                Book via WhatsApp
              </button>
              <a
                href="tel:+255718703952"
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#0A1F44] transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">Huduma Zetu</h2>
            <p className="text-xl text-gray-600">Chagua huduma unayohitaji</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToBooking}
                  className="w-full bg-[#1E3A8A] text-white py-3 rounded-lg font-semibold hover:bg-[#0A1F44] transform hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">Jinsi Inavyofanya Kazi</h2>
            <p className="text-xl text-gray-600">Hatua 3 tu hadi nyumba yako iwe safi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#1E3A8A] via-[#3B82F6] to-[#1E3A8A] -translate-y-1/2 -z-0"></div>

            {[
              { number: '1', title: 'Chagua Huduma', desc: 'Choose service type' },
              { number: '2', title: 'Weka Maelezo', desc: 'Fill simple booking form' },
              { number: '3', title: 'Tuma kwa WhatsApp', desc: 'We respond immediately' }
            ].map((step, index) => (
              <div key={index} className="relative z-10 text-center">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">Weka Booking</h2>
            <p className="text-xl text-gray-600">Jaza fomu na tutakujibu haraka</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Jina</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-20 transition-all outline-none"
                  placeholder="Jina lako kamili"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Simu</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-20 transition-all outline-none"
                  placeholder="0718703952"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Location</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-20 transition-all outline-none"
                  placeholder="Nungwi, Kendwa, nk."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tarehe</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-20 transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Huduma</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-20 transition-all outline-none"
                >
                  <option value="">Chagua huduma</option>
                  <option value="Usafi wa Nyumba">Usafi wa Nyumba</option>
                  <option value="Usafi wa Ofisi">Usafi wa Ofisi</option>
                  <option value="After Event Cleaning">After Event Cleaning</option>
                  <option value="Move In / Move Out">Move In / Move Out</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Ujumbe (Optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A] focus:ring-opacity-20 transition-all outline-none resize-none"
                  placeholder="Maelezo zaidi..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] text-white py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Tuma kwa WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">Kwa Nini Utuchague?</h2>
            <p className="text-xl text-gray-600">Sababu zinazotufanya tofauti</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                  <item.icon className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-lg text-gray-800 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A1F44] mb-4">Wateja Wetu Wanasema</h2>
            <p className="text-xl text-gray-600">Testimonials kutoka kwa wapendwa wetu</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-[#0A1F44]">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#0A1F44] via-[#1E3A8A] to-[#0A1F44] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Wasiliana Nasi</h2>
            <p className="text-xl text-blue-200">Tuko tayari kukusaidia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-blue-200">Nungwi, Zanzibar</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <Phone className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-2">Simu</h3>
              <a href="tel:+255718703952" className="text-blue-200 hover:text-white transition-colors block">0718703952</a>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <a href="https://wa.me/255626232462" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors block">0626232462</a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-blue-200">© 2026 Sammy Smart Cleanup. All rights reserved.</p>
            <p className="text-blue-300 mt-2 font-semibold">Locally Trusted in Zanzibar</p>
          </div>
        </div>
      </section>

      <button
        onClick={openWhatsApp}
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 animate-bounce hover:animate-none"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </button>
    </div>
  );
}

export default App;
