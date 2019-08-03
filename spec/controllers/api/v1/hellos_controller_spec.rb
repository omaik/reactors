RSpec.describe Api::V1::HellosController, type: :controller do

  describe '#index' do
    it 'returns json' do
      get :index

      expect(response.body).to eq({text: 'Hello'}.to_json)
    end
  end
end
